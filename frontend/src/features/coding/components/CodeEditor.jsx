import Editor from "@monaco-editor/react";

const CodeEditor = ({
  language,
  code,
  setCode,
}) => {

  return (
    <div className="h-[70vh] rounded-2xl overflow-hidden">

      <Editor
        height="100%"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value)}
      />

    </div>
  );
};

export default CodeEditor;