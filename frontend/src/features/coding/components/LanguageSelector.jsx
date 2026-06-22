const LanguageSelector = ({
  language,
  setLanguage,
}) => {

  return (

    <select
      value={language}
      onChange={(e) =>
        setLanguage(e.target.value)
      }
      className="
        bg-black
        border
        border-white/10
        p-3
        rounded-xl
      "
    >

      <option value="javascript">
        JavaScript
      </option>

      <option value="python">
        Python
      </option>

      <option value="cpp">
        C++
      </option>

      <option value="java">
        Java
      </option>

    </select>
  );
};

export default LanguageSelector;