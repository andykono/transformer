export default class TransformationTree {
    private root: Map<string, TreeNode> = new Map();

    private createNode(name: string): TreeNode {
        return {
            name,
            transformations: [],
            children: new Map(),
        };
    }

    private getBaseColumn(column: string): string {
        const parts = column.split('.');
        return parts[0];
    }

    private getColumnPath(column: string): string[] {
        return column.split('.');
    }

    addTransformation(transformation: Transformation): void {
        if (!transformation.column) return;

        const baseColumn = this.getBaseColumn(transformation.column);
        const path = this.getColumnPath(transformation.column);

        let currentLevel = this.root;
        let currentNode: TreeNode;

        // Создаем или получаем узел для базовой колонки
        if (!currentLevel.has(baseColumn)) {
            currentLevel.set(baseColumn, this.createNode(baseColumn));
        }
        currentNode = currentLevel.get(baseColumn)!;

        // Проходим по пути колонки
        for (let i = 1; i < path.length; i++) {
            const segment = path[i];
            if (!currentNode.children.has(segment)) {
                currentNode.children.set(segment, this.createNode(segment));
            }
            currentNode = currentNode.children.get(segment)!;
        }

        // Добавляем трансформацию
        currentNode.transformations.push({
            type: transformation.transformation,
            alias: transformation.alias || '',
            args: transformation.transformationArgs,
        });
    }

    private printNode(
        node: TreeNode,
        prefix: string = '',
        isLast: boolean = true
    ): string {
        const marker = isLast ? '└── ' : '├── ';
        const childPrefix = prefix + (isLast ? '    ' : '│   ');

        let result = prefix + marker + node.name + '\n';

        // Печатаем трансформации
        node.transformations.forEach((t, index, array) => {
            const tMarker = index === array.length - 1 ? '└── ' : '├── ';
            result += childPrefix + tMarker + `${t.alias} (${t.type})\n`;
        });

        // Печатаем дочерние узлы
        const children = Array.from(node.children.entries());
        children.forEach(([_, childNode], index) => {
            result += this.printNode(
                childNode,
                childPrefix,
                index === children.length - 1
            );
        });

        return result;
    }

    print(): string {
        let result = '';
        const roots = Array.from(this.root.entries());

        roots.forEach(([name, node], index) => {
            result += this.printNode(node, '', index === roots.length - 1);
        });

        return result;
    }
}
