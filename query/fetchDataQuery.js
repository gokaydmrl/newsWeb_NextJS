const fetcher = async () => {
  try {
    console.log("fetchre çalıştı");
    const reso = await fetch("http://localhost:3000/api/news");
    const responso = await reso.json();
    console.log("res", reso);
    return responso;
  } catch (error) {
    console.log(error);
  }
};

export default fetcher;
