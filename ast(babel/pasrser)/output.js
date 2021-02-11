Node {
  type: 'File',
  start: 0,
  end: 41,
  loc: SourceLocation {
    start: Position { line: 1, column: 0 },
    end: Position { line: 4, column: 0 },
    filename: undefined,
    identifierName: undefined
  },
  range: undefined,
  leadingComments: undefined,
  trailingComments: undefined,
  innerComments: undefined,
  extra: undefined,
  errors: [],
  program: Node {
    type: 'Program',
    start: 0,
    end: 41,
    loc: SourceLocation {
      start: Position { line: 1, column: 0 },
      end: Position { line: 4, column: 0 },
      filename: undefined,
      identifierName: undefined
    },
    range: undefined,
    leadingComments: undefined,
    trailingComments: undefined,
    innerComments: undefined,
    extra: undefined,
    sourceType: 'script',
    interpreter: null,
    body: [
      Node {
        type: 'VariableDeclaration',
        start: 0,
        end: 21,
        loc: SourceLocation {
          start: Position { line: 1, column: 0 },
          end: Position { line: 1, column: 21 },
          filename: undefined,
          identifierName: undefined
        },
        range: undefined,
        leadingComments: undefined,
        trailingComments: undefined,
        innerComments: undefined,
        extra: undefined,
        declarations: [
          Node {
            type: 'VariableDeclarator',
            start: 6,
            end: 20,
            loc: SourceLocation {
              start: Position { line: 1, column: 6 },
              end: Position { line: 1, column: 20 },
              filename: undefined,
              identifierName: undefined
            },
            range: undefined,
            leadingComments: undefined,
            trailingComments: undefined,
            innerComments: undefined,
            extra: undefined,
            id: Node {
              type: 'Identifier',
              start: 6,
              end: 9,
              loc: SourceLocation {
                start: Position { line: 1, column: 6 },
                end: Position { line: 1, column: 9 },
                filename: undefined,
                identifierName: 'str'
              },
              range: undefined,
              leadingComments: undefined,
              trailingComments: undefined,
              innerComments: undefined,
              extra: undefined,
              name: 'str'
            },
            init: Node {
              type: 'StringLiteral',
              start: 12,
              end: 20,
              loc: SourceLocation {
                start: Position { line: 1, column: 12 },
                end: Position { line: 1, column: 20 },
                filename: undefined,
                identifierName: undefined
              },
              range: undefined,
              leadingComments: undefined,
              trailingComments: undefined,
              innerComments: undefined,
              extra: { rawValue: 'testです', raw: '"testです"' },
              value: 'testです'
            }
          }
        ],
        kind: 'const'
      },
      Node {
        type: 'ExpressionStatement',
        start: 23,
        end: 40,
        loc: SourceLocation {
          start: Position { line: 3, column: 0 },
          end: Position { line: 3, column: 17 },
          filename: undefined,
          identifierName: undefined
        },
        range: undefined,
        leadingComments: undefined,
        trailingComments: undefined,
        innerComments: undefined,
        extra: undefined,
        expression: Node {
          type: 'CallExpression',
          start: 23,
          end: 39,
          loc: SourceLocation {
            start: Position { line: 3, column: 0 },
            end: Position { line: 3, column: 16 },
            filename: undefined,
            identifierName: undefined
          },
          range: undefined,
          leadingComments: undefined,
          trailingComments: undefined,
          innerComments: undefined,
          extra: undefined,
          callee: Node {
            type: 'MemberExpression',
            start: 23,
            end: 34,
            loc: SourceLocation {
              start: Position { line: 3, column: 0 },
              end: Position { line: 3, column: 11 },
              filename: undefined,
              identifierName: undefined
            },
            range: undefined,
            leadingComments: undefined,
            trailingComments: undefined,
            innerComments: undefined,
            extra: undefined,
            object: Node {
              type: 'Identifier',
              start: 23,
              end: 30,
              loc: SourceLocation {
                start: Position { line: 3, column: 0 },
                end: Position { line: 3, column: 7 },
                filename: undefined,
                identifierName: 'console'
              },
              range: undefined,
              leadingComments: undefined,
              trailingComments: undefined,
              innerComments: undefined,
              extra: undefined,
              name: 'console'
            },
            computed: false,
            property: Node {
              type: 'Identifier',
              start: 31,
              end: 34,
              loc: SourceLocation {
                start: Position { line: 3, column: 8 },
                end: Position { line: 3, column: 11 },
                filename: undefined,
                identifierName: 'log'
              },
              range: undefined,
              leadingComments: undefined,
              trailingComments: undefined,
              innerComments: undefined,
              extra: undefined,
              name: 'log'
            }
          },
          arguments: [
            Node {
              type: 'Identifier',
              start: 35,
              end: 38,
              loc: SourceLocation {
                start: Position { line: 3, column: 12 },
                end: Position { line: 3, column: 15 },
                filename: undefined,
                identifierName: 'str'
              },
              range: undefined,
              leadingComments: undefined,
              trailingComments: undefined,
              innerComments: undefined,
              extra: undefined,
              name: 'str'
            }
          ]
        }
      }
    ],
    directives: []
  },
  comments: []
}