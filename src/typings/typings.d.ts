interface CommentTag {
    tag: string;
    escapedTag: string;
    decoration: any;
    ranges: Array<any>;
}

interface Contributions {
    highlightMarkdown: boolean;
    multilineComments: boolean;
    useJSDocStyle: boolean;
    highlightPlainText: boolean;    
    tags: [{
        tag: string;
        color: string;
        strikethrough: boolean;
        underline: boolean;
        bold: boolean;
        italic: boolean;
        backgroundColor: string;
    }];
}

interface CommentConfig {
    lineComment?: string;
    blockComment?: [string, string];
}