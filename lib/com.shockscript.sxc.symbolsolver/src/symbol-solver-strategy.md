# Solve Strategy

## Lexical References

By default, a lexical reference resolves to a variable, virtual or method slot, except where type expressions are expected. If the lexical reference does not resolve to either of these, then it can still resolve to a module or type.

As a convention, to desambiguate namespace, type and local, the programmer may use the `ns_` or `t_` prefix to alias the module or type:

```
Imports t_App = App.App
App = New t_App
t_App.SomeFn App
```

## Conversions

When `CType` or `CTryCast` result into `ConversionValue`, adjust the corresponding properties: `byCType` and `byTryCast`.