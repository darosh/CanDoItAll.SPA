Known gaps:

- [ ] The 13 workbench engine files stay IIFE-style pending your planned ES-module migration.
- [ ] Context actions open/connect/reconnect/summary/test/move-descendants-to-subproject and most quick-create types beyond note/decision/phase/milestone — need UI flows beyond a menu-to-REST mapping.
- [ ] ~40 other endpoints in ProjectStructureAgentApi.cs likely share the same missing-.Produces<>() gap; worth a backend audit before they're wired.
- [ ] Annotations (from ProjectStructureNodeAnnotationBuilder) not yet ported.
- [ ] canvas is based on https://konvajs.org/?
