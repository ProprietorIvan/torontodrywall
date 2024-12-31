const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result)
        resolve(reader.result as string)
      };
      reader.onerror = (error) => reject(error);
    });
  };

  export default fileToBase64