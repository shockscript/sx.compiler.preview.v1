import { Host } from './model/symbol.js';

export class SymbolSolver {
	constructor() {
		this.sdmHost = new Host;
		this.sdmHost.init();
		this.resolvedAst = new ResolvedAst;
	}
}

class ResolvedAst {
	constructor() {
		this._currentScript = null;
		this._scriptStack = [];
		this._scriptToAstToSymbol = new Map;
		this._scriptToAstToBoolean = new Map;
		this._astToSymbol = null;
		this._astToBoolean = null;
	}

	enterScript(s) {
		this._currentScript = s;
		this._scriptStack.push(s);
		this._astToSymbol = this._scriptToAstToSymbol.get(s) || new Map;
		this._astToBoolean = this._scriptToAstToBoolean.get(s) || new Map;
		this._scriptToAstToSymbol.set(s, this._astToSymbol);
		this._scriptToAstToBoolean.set(s, this._astToBoolean);
	}

	exitScript() {
		this._scriptStack.pop();
		this._currentScript = this._scriptStack[this._scriptStack.length - 1];
		this._astToSymbol = this._scriptToAstToSymbol.get(this._currentScript);
		this._astToBoolean = this._scriptToAstToBoolean.get(this._currentScript);
	}

	symbolOf(node) {
		return this._astToSymbol == null ? null : this._astToSymbol.get(node);
	}

	resolve(node, symbol) {
		this._astToSymbol.set(node, symbol);
		this._astToBoolean.set(node, true);
	}

	remove(node) {
		this._astToSymbol.remove(node);
		this._astToBoolean.remove(node);
	}

	isResolved(node) {
		return !!this._astToBoolean.get(node);
	}
}

class Phase {
	constructor(value) {
		this._v = value;
		Phase._byValue.set(this._v, this);
	}

	static valueOf(v) {
		return Phase._byValue.get(v) || null;
	}

	valueOf() {
		return this._v;
	}
}

Phase._byValue = new Map;

Phase.DECLARATION_1 = new Phase(0);
Phase.DECLARATION_2 = new Phase(1);
Phase.DECLARATION_3 = new Phase(2);
Phase.DECLARATION_4 = new Phase(3);
Phase.INTERFACES = new Phase(4);
Phase.DECLARATION_5 = new Phase(5);
Phase.INTERFACE_OPERATORS = new Phase(6);
Phase.OMEGA = new Phase(7);

class PhaseDistributor {
	constructor(symbolSolver) {
		this.symbolSolver = symbolSolver;
		this.phase = Phase.DECLARATION_1;
	}

	get hasRemaining() {
		return this.phase != null;
	}

	nextPhase() {
		if (this.phase != null) {
			this.phase = Phase.valueOf(this.phase.valueOf() + 1);
		}
	}

	resolve(directives) {
		this.symbolSolver.resolveDirectives(directives, new Context().withPhase(this.phase));
	}
}

class Context {
	constructor() {
		this.flags = 0;
		this.phase = null;
		this.expectedType = null;
		this.reportConstExpErrors = true;
	}

	withFlags(flags) {
		this.flags = flags;
		return this;
	}

	withPhase(phase) {
		this.phase = phase;
		return this;
	}

	withExpectedType(t) {
		this.expectedType = t;
		return this;
	}

	clone() {
		let r = new Context().withPhase(phase);
		r.reportConstExpErrors = this.reportConstExpErrors;
		return r;
	}
}

const ContextFlags = {
	UPDATE_TARGET: 1,
	CALL_BASE_REFERENCE: 2,
};

class OpenedFunction {
	constructor(activation, methodSlot, commonNode) {
		this.activation = methodSlot ? methodSlot.activation : activation;
		this.methodSlot = methodSlot;
		this.commonNode = commonNode;
	}
}