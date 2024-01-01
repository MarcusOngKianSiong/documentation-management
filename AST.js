// const parser = require('@babel/parser');
// const traverse = require('@babel/traverse').default;

global.listMethods = function (code) {
  const ast = parser.parse(code, {
    sourceType: 'module',
  });

//   console.log(ast)

  const methods = [];
  
  traverse(ast, {
    FunctionDeclaration(path) {
      // Extract method names from FunctionDeclaration nodes
      const methodName = path.node.id.name;
      methods.push(methodName);
    },
    FunctionExpression(path) {
      // Extract method names from FunctionExpression nodes
      if (path.parent.type === 'VariableDeclarator') {
        const methodName = path.parent.id.name;
        methods.push(methodName);
      }
    },
    ClassMethod(path) {
        // console.log(path.node)
      // Extract method names from ClassMethod nodes
      const methodName = path.node.key.name;
      methods.push(methodName);
    },
  });

  return methods;
}

// Example usage


