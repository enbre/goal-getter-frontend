import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid" style={{backgroundColor: 'white', width: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5% auto 0', borderRadius: '10px', border: '2px solid black', padding: '20px'}}>
        <div>
          <h3 className="display-4">Goal Getter!</h3>
          <p className="lead">A simple tool to keep you organized and motivated</p>
          <h5>Registration Required!</h5>
        </div>
        <div>
          <img style={{display: 'flex', padding:'60px' }} width="100%" src="/jessica-lewis-fJXv46LT7Xk-unsplash.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
