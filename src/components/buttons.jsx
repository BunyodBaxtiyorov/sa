import "./button.css";
export default function Button() {
  return (
    <>
      {/* <a href="http://www.thismanslife.co.uk" target="_blank">
        Entertainment
      </a> */}

      <h1 className="h1-1">Just Watch and enjoy it</h1>
      <div className="container center-button">
        <div className="div-1">
          <button className="button-49" role="button">
            <a href="https://www.youtube.com">Youtube</a>
          </button>
        </div>
        <div className="div-2">
          <button className="button-49" role="button">
            <a href="https://www.instagram.com">Instagram</a>
          </button>
        </div>
        <div className="div-3">
          <button className="button-49" role="button">
            <a href="https://www.x.com">Twitter</a>
          </button>
        </div>
      </div>
    </>
  );
}
