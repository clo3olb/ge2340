import SyntaxHighlighter from "react-syntax-highlighter";

import docco from "react-syntax-highlighter/dist/cjs/styles/hljs";

type Props = {
  code: string;
  language:
    | "javascript"
    | "typescript"
    | "bash"
    | "html"
    | "css"
    | "python"
    | "text";
  lineNumbers?: boolean;
};

export default function Code({ code, language, lineNumbers = false }: Props) {
  return (
    <SyntaxHighlighter
      language={language}
      style={docco}
      showLineNumbers={lineNumbers}
      wrapLongLines
    >
      {code.trim()}
    </SyntaxHighlighter>
  );
}
