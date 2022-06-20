import React from 'react';
import './scss/App.scss';
import meme from './assets/meme-logo.jpeg'

function App() {
	const [imgData, SetImgData] = React.useState({
		upperText: "",
		bottomText: "",
		memeUrl: "http://i.imgflip.com/1bij.jpg",
	});
	
	const [memeData, setMemeData] = React.useState([]);

	React.useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then(res => res.json())
			.then(json => setMemeData(json.data.memes));
	}, []);

	function handleClick() {
		SetImgData(currImgData=> {
			const randNumber = Math.floor(Math.random() * memeData.length);
			console.log(memeData[randNumber].url);
			return ({
				...currImgData,
				memeUrl: memeData[randNumber].url,
			});
		})
	}

	function handleChange(event) {
		SetImgData(currImgData => {
				return ({
					...currImgData,
					[event.target.name]: event.target.value
				})
		})
	}
	console.log(imgData);

  return (
    <div className="App">
      <header className="App-header">
				<img src={meme} alt="logo" />
      </header>
			<div className="App-form">
				<input 
					type="text"
					name="upperText"
					placeholder='Upper Text'
					onChange={handleChange}
					value={imgData.upperText}
				/>
				<input 
					type="text"
					name="bottomText"
					placeholder='Bottom Text'
					onChange={handleChange}
					value={imgData.bottomText}
				/>
				<button onClick={handleClick} className="img-btn">Get a New MEME Image</button>
				<div className="meme">
					<p className="upper">{imgData.upperText}</p>
					<img src={imgData.memeUrl} alt="meme" />
					<p className="bottom">{imgData.bottomText}</p>
				</div>
			</div>
    </div>
  );
}

export default App;
