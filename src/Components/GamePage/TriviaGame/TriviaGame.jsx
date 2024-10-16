// Juego de Trivia:
// 20 preguntas en total

import React, { useState, useEffect, useRef } from 'react';
import './TriviaGame.css';
import imagePudu from './puduTrivia.jpg';
import Header from '../../LandingPage/Header/Header';


import hoverSound from './selectChoiceTrivia.mp3';
import winSound from './winGameTrivia.mp3';
import loseSound from './loseGameTrivia.mp3';
import backgroundMusic from './MusicTrivia.MP3';
import tryAgainSound from './failureTrivia.mp3';

const TriviaGame = () => {
    const allQuestions = [
        {
            question: "¿Cuál es el único felino endémico de Chile?",
            options: ["Puma", "Leopardo", "Gato Montés", "Jaguar"],
            answer: "Puma"
        },
        {
            question: "¿Qué pequeño ciervo es conocido como el más pequeño del mundo y vive en Chile?",
            options: ["Venado", "Ciervo Rojo", "Pudú", "Gamo"],
            answer: "Pudú"
        },
        {
            question: "¿Qué ave endémica de Chile es famosa por su colorido plumaje y su gran tamaño?",
            options: ["Cóndor Andino", "Águila", "Halcón", "Flamenco"],
            answer: "Cóndor Andino"
        },
        {
            question: "¿Cuál es el nombre del pequeño marsupial endémico que se encuentra en los bosques del sur de Chile?",
            options: ["Koala", "Canguro", "Monito del monte", "Wombat"],
            answer: "Monito del monte"
        },
        {
            question: "¿Qué especie de rana endémica de Chile es conocida por sus colores brillantes y vive en los bosques?",
            options: ["Rana de Darwin", "Rana Toro", "Sapo Común", "Rana Arborícola"],
            answer: "Rana de Darwin"
        },
        {
            question: "¿Qué lagarto endémico de Chile es famoso por su capacidad de cambiar de color?",
            options: ["Iguana", "Camaleón", "Lagarto de cola larga", "Gecko"],
            answer: "Lagarto de cola larga"
        },
        {
            question: "¿Cuál es el nombre de la ave endémica de Chile que se encuentra en la Isla Juan Fernández y es conocida por su capacidad de volar largas distancias?",
            options: ["Pico de plata", "Albatros", "Petrel", "Gaviota"],
            answer: "Pico de plata"
        },
        {
            question: "¿Qué pez endémico de los ríos y lagos del sur de Chile es conocido por su valor económico y sabor?",
            options: ["Trucha arcoíris", "Salmón", "Carpa", "Bagre"],
            answer: "Trucha arcoíris"
        },
        {
            question: "¿Cuál es el nombre del ratón endémico que habita en los bosques nublados del sur de Chile?",
            options: ["Ratón de cola de pincel", "Ratón doméstico", "Ratón de campo", "Ratón de la Patagonia"],
            answer: "Ratón de cola de pincel"
        },
        {
            question: "¿Qué insecto endémico de Chile es conocido por su capacidad de volar durante la noche y tiene un rol crucial en la polinización?",
            options: ["Polilla de la papa", "Abeja", "Mariposa", "Avispa"],
            answer: "Polilla de la papa"
        },
        {
            question: "¿Qué ave endémica de Chile tiene un plumaje verde esmeralda y vive en los bosques de la región de los Lagos?",
            options: ["Tucán", "Pájaro Carpintero", "Cormorán", "Torito"],
            answer: "Pájaro Carpintero"
        },
        {
            question: "¿Qué mariposa endémica de Chile es conocida por su color vibrante y patrones únicos?",
            options: ["Mariposa Monarca", "Mariposa Andina", "Mariposa de los Andes", "Mariposa de Darwin"],
            answer: "Mariposa Andina"
        },
        {
            question: "¿Qué pez endémico de los lagos y ríos de Chile es conocido por su capacidad de adaptarse a diferentes ambientes acuáticos?",
            options: ["Trucha de arroyo", "Bagre de río", "Salmonete", "Salmón Chileno"],
            answer: "Trucha de arroyo"
        },
        {
            question: "¿Qué tipo de araña endémica de Chile se caracteriza por su gran tamaño y su coloración llamativa?",
            options: ["Araña de jardín", "Araña de la Patagonia", "Araña de la Sierra", "Araña de bosque"],
            answer: "Araña de la Patagonia"
        },
        {
            question: "¿Qué marsupial endémico de Chile es conocido por su habilidad para escalar y vivir en árboles?",
            options: ["Zarigüeya", "Koala", "Monito del monte", "Wombat"],
            answer: "Monito del monte"
        },
        {
            question: "¿Cuál es el nombre del pequeño insecto endémico que juega un rol importante en el ecosistema de los bosques nublados de Chile?",
            options: ["Escorpión", "Cucaracha", "Escarabajo", "Polilla"],
            answer: "Escarabajo"
        },
        {
            question: "¿Qué tipo de culebra endémica de Chile se encuentra en las regiones áridas del norte del país?",
            options: ["Culebra de cola roja", "Culebra de arena", "Boa constrictor", "Culebra de montaña"],
            answer: "Culebra de arena"
        },
        {
            question: "¿Qué ave endémica de Chile es conocida por su habilidad para realizar vuelos acrobáticos y su canto melodioso?",
            options: ["Pájaro Lira", "Ruisenor", "Gorrión", "Mirlo"],
            answer: "Pájaro Lira"
        },
        {
            question: "¿Cuál es el nombre del cetáceo endémico que se encuentra en las aguas costeras del sur de Chile y es conocido por su comportamiento migratorio?",
            options: ["Ballena Azul", "Ballena Jorobada", "Orca", "Delfín Chileno"],
            answer: "Delfín Chileno"
        },
        {
            question: "¿Qué tipo de tortuga endémica de Chile se encuentra en las islas del sur y es conocida por su longevidad y tamaño?",
            options: ["Tortuga de Galápagos", "Tortuga de río", "Tortuga marina", "Tortuga de Juan Fernández"],
            answer: "Tortuga de Juan Fernández"
        }
    ];
    
    const [questions, setQuestions] = useState([]);
    const [actualQuestion, setActualQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [startGame, setStartGame] = useState(false);
    const [finished, setFinished] = useState(false);
    const [winMessage, setWinMessage] = useState('');
    const [musicPlaying, setMusicPlaying] = useState(false);

    const hoverSoundRef = useRef(null);
    const winSoundRef = useRef(null);
    const loseSoundRef = useRef(null);
    const tryAgainSoundRef = useRef(null);
    const backgroundMusicRef = useRef(null);

    useEffect(() => {
        const backgroundMusic = backgroundMusicRef.current;

        // Inicia la música en el montaje si está activada
        if (musicPlaying) {
            backgroundMusic.play();
        }

        return () => {
            if (backgroundMusic) {
                backgroundMusic.pause();
            }
        };
    }, [musicPlaying]);

    useEffect(() => {
        if (finished) {
            handleWin(score);
        }
    }, [finished, score]);

    const handleWin = (score) => {
        if (score === 5) {
            winSoundRef.current.play();
            setWinMessage('¡Ganaste!');
        } else if (score <= 0) {
            loseSoundRef.current.play();
            setWinMessage('Perdiste.');
        } else {
            tryAgainSoundRef.current.play();
            setWinMessage('¡Sigue intentando!');
        }

        backgroundMusicRef.current.pause();
        setMusicPlaying(false);
    };

    const StartGame = () => {
        const questionsShuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 5);
        setQuestions(questionsShuffled);
        setActualQuestion(0);
        setScore(0);
        setStartGame(true);
        setFinished(false);
        setWinMessage('');
        if (musicPlaying) {
            backgroundMusicRef.current.play();
        }
    };

    const handleAnswer = (answer) => {
        hoverSoundRef.current.play();

        if (actualQuestion < questions.length) {
            const correctAnswer = questions[actualQuestion].answer;
            if (answer === correctAnswer) {
                setScore(prevScore => prevScore + 1);
            } else {
                setScore(prevScore => prevScore - 1); 
                if (score <= 0) {
                    setFinished(true);
                    backgroundMusicRef.current.pause();
                    return;
                }
            }

            if (actualQuestion === questions.length - 1) {
                setFinished(true);
                setStartGame(false);
                backgroundMusicRef.current.pause();
            } else {
                setActualQuestion(prevQuestion => prevQuestion + 1);
            }
        }
    };

    const toggleMusic = () => {
        if (musicPlaying) {
            backgroundMusicRef.current.pause();
        } else {
            backgroundMusicRef.current.play();
        }
        setMusicPlaying(!musicPlaying);
    };

    return (
        <div className='backgroundTrivia'>
        <div className='TriviaGame'>
            <Header className="color" />
            <div className='trivia'>
            <p className='title'>TRIVIA <br/>Animales Endémicos de Chile</p>
            <img src={imagePudu} alt='Pudu' width={200} className='Pudu'></img>
            <button onClick={toggleMusic} className='buttonTrivia'>
                {musicPlaying ? 'Parar Música' : 'Reproducir Música'}
            </button>
            <audio ref={backgroundMusicRef} src={backgroundMusic} loop />
            <audio ref={hoverSoundRef} src={hoverSound} />
            <audio ref={winSoundRef} src={winSound} />
            <audio ref={loseSoundRef} src={loseSound} />
            <audio ref={tryAgainSoundRef} src={tryAgainSound} />
            {!startGame && !finished && (
                <button className='buttonStart' onClick={StartGame}>Iniciar Juego</button>
            )}
            {startGame && !finished && (
                <div className='questions'>
                    <h3>{questions[actualQuestion].question}</h3>
                    <div className='paragraph'>
                        <p className='gameScoreActive'>Puntuación: {score}</p>
                    </div>
                    <div className='options'>
                        {questions[actualQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                className='buttonTrivia'
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    
                </div>
            )}
            {finished && (
                <div className='paragraph'>
                    <p className='finishedGame'>Juego finalizado</p>
                    <p className='gameResults'>Resultados: {winMessage}</p>
                    <p className='gameScore'>Puntuación: {score}</p>
                    <button onClick={StartGame} className='buttonTrivia'>Jugar de nuevo</button>
                </div>
            )}
           </div>
        </div>
        </div>
    );
};

export default TriviaGame;