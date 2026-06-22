import axios from "axios";



export const uploadNotes =
  async (formData) => {

    const response =
      await axios.post(

        "http://localhost:5000/api/notes/upload",

        formData,

        {

          headers: {

            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data;
  };