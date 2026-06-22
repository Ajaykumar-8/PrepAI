import { useState } from "react";

import axios from "axios";

import CodeEditor from "../components/CodeEditor";
import LanguageSelector from "../components/LanguageSelector";
import OutputConsole from "../components/OutputConsole";
import RunButton from "../components/RunButton";

import { boilerplates } from "../utils/boilerplates";

const CodingPage = () => {

  const [language, setLanguage] =
    useState("javascript");

  const [code, setCode] =
    useState(
      boilerplates.javascript
    );

  const [output, setOutput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const runCode = async () => {

    try {

      setLoading(true);

      const res =
        await axios.post(

          "http://localhost:5000/api/coding/run",

          {
            language,
            source_code: code,
          }
        );

      setOutput(
        res.data.stdout ||
        res.data.stderr ||
        "No Output"
      );

    } catch (error) {

      setOutput(
        "Execution Failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="p-6 text-white">

      <div className="flex justify-between mb-5">

        <LanguageSelector
          language={language}
          setLanguage={(lang) => {

            setLanguage(lang);

            setCode(
              boilerplates[lang]
            );
          }}
        />

        <RunButton
          runCode={runCode}
          loading={loading}
        />

      </div>

      <CodeEditor
        language={language}
        code={code}
        setCode={setCode}
      />

      <div className="mt-5">

        <OutputConsole
          output={output}
        />

      </div>

    </div>
  );
};

export default CodingPage;