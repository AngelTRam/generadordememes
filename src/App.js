import html2canvas from 'html2canvas';
import {useState} from 'react';
import './App.css';

function App() {
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value)
  }
  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value)
  }

  const onChangeImagen = function(evento){
    setImagen(evento.target.value)
  }

  const exportarImagen = function(){
    html2canvas(document.querySelector("#save")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
    alert('Guardando imagen.')

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Generador de memes</h1>
        <select onChange={onChangeImagen}>
          <option> SELECCIONA IMAGEN </option>
          <option value="perrito">"Esta bien"</option>
          <option value="chica-incendio">Chica con fuego atras</option>
        </select>
        <input onChange={onChangeLinea1} type="text" placeholder='Texto superior'></input>
        <input onChange={onChangeLinea2} type="text" placeholder='Texto Inferior'></input>
        <button onClick={exportarImagen}>Exportar</button>
        <div id='save' className='meme'>
        <span> {linea1}</span> <br/>
        <span> {linea2}</span>
        <img src={'/img/'+imagen+'.jpg'}/>
      </div>
      </header>
      
      
    </div>
  );
}

export default App;
