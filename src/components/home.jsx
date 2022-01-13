import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to my super store</h1>
      <h3>Check our amazing catalog</h3>
      <hr />
      <audio src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" controls autoPlay={true} loop={true}></audio>

      <Link className="btn btn-primary" to="/catalog">
        View Catalog <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
      </Link>
    </div>
  );
};

export default Home;

