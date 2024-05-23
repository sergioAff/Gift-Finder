export const GifGrid = ({ category }) => {

  const getGif=async()=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=ERFmClN1aQr20nkBOhATZSn3EFaq5cZW&q=${category}`

    const resp=await fetch(url)

    console.log(resp)
  }

  getGif()

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
