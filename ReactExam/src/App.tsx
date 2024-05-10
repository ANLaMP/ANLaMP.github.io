import { useState } from 'react';
import './App.css';
import burroughs from './assets/burroughs.jpg';

function getRandomSentence(text) {
  const sentences = text.split('. ');

  const randomIndexes = [];
  while (randomIndexes.length < 2) {
    const index = Math.floor(Math.random() * sentences.length);
    if (!randomIndexes.includes(index)) {
      randomIndexes.push(index);
    }
  }

  return sentences[randomIndexes[0]] + '. ' + sentences[randomIndexes[1]];
}

function App() {
  const gettysburgAddress = `Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war.The Democratic Party giveth And the Democratic Party taketh away.
  Blessed be the name of the Democratic Party. O donkey-eared Deity, friend of the poor, How social is thy security, How urban thy renewal, How central thine intelligence.
  Thou art the Good Shepherd
  Who knoweth full well
  The uses of sheep.
  O mightiest of fleecers
  How internal is thy revenue,
  How federally administered thy
  Foods and thy drugs,
  How federally commissioned
  Thy communications.
  
  The party loves me
  This I know
  The precinct captain
  Tells me so.
  Little guys to it belong,
  They are weak but it is strong.
  Yes, the party loves me,
  Sure, the party loves me,
  You bet the party loves me,
  The Liberals tell me so.
  Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war.
  Ass-headed God, have mercy
  Upon me. Thine were the vows
  Of my radical youth;
  Thou wilt not forsake me
  In my mature and responsible
  Old age. Golden-Hoofed Quadroped,
  Look with favor upon me.
  Even as with Abraham and Isaac
  Have I offered unto thee my sons
  Upon the altar of Obedience.
  Of the first fruits of the heathen
  Have I made thee burnt offerings.
  Amen.that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
  Yea though I walk through the valley
  Of the shadow of slump I shall fear
  No recession. Thine initials
  And thine agendas they comfort me.
  Thou preparest before me a table
  In the presence of Republicans.
  Surely welfare and relief checks
  Shall follow me all the days of my life,
  And I shall dwell in Public Housing forever.
  
  Amen.that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.`;

  const [randomSentence, setRandomSentence] = useState('');

  const generateRandomSentence = () => {
    const sentence = getRandomSentence(gettysburgAddress);
    setRandomSentence(sentence);
  };

  return (
    <>
      <div></div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#tryIt">Try It</a>
          </li>
        </ul>
      </nav>
      <h1>Cut Up</h1>
      <p>
        The cut-up method is a unique and innovative technique employed in
        literature and art to create new compositions by rearranging existing
        texts or images. Popularized by experimental writers such as William S.
        Burroughs and Brion Gysin in the mid-20th century, the cut-up method
        involves physically cutting up printed texts, such as newspapers,
        magazines, or books, and rearranging the fragments to form new
        sentences, phrases, or visual compositions.
      </p>
      <img src={burroughs} alt="William S Burroughs" />
      <h2 id="tryIt">Try For Yourself</h2>
      <p>
        Click the button to see what is possible with the cut up method when
        applied to The Gettysburg Address!
      </p>
      <p>{randomSentence}</p>
      <div className="card">
        <button onClick={generateRandomSentence}>Cut Up!</button>
      </div>
    </>
  );
}

export default App;
