import './App.css';
import './css/app.css';
import React from 'react';
import ReactDOM from 'react-dom'

import LeftProjects from './components/LeftProjects';
import PageHeader from './components/PageHeader'
import ThreeDViewer from './components/ThreeDViewer';
import logo from './logo.svg';
import RightProjects from './components/RightProjects';
import MyDescription from './components/MyDescription';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom"
import Details from './components/Details';



function App() {
  if (localStorage['languages'] == null || localStorage['languages'] == undefined) {
    localStorage.setItem('languages', 0)
  }

  var environmentVariable = [
    {
      name: 'Mateus',
      nickName: 'Arruda',
      description: [
        "Meu nome é apenas Mateus. Sou de uma pequena cidade chamada Itapipoca, no Ceará, Brasil.",
        "Engenheiro de Computação desde 2018 pela Universidade Federal do Ceará.",
        "Apenas fazendo o máximo possível para driblar as consequências de uma má sorte ocasional.",
        "Apenas tentando ser alguém.",
      ],
      sideTitle: ['O que fiz como artista', 'O que fiz como desenvolvedor'],
      artNames: ['Capsule 341', 'Previsão Histórica', 'Tempo e Dinheiro', 'Bem-vindo à Minha Mente', 'Casa Assombrada', 'Spider-Man'],
      codeProjectNames: ['Magnifinance', 'Blender', 'Kaynan Nutricionista ', 'Loading JR.'],
      data: {
        labels: ['Trabalho em Equipe', 'Organização', 'Adaptabilidade', 'Curiosidade', 'Auto-didata'],
        datasets: [{
          data: [92, 80, 95, 88, 75],
          backgroundColor: 'rgba(17, 192, 145, 0.1)',
          borderColor: 'rgba(17, 192, 145, 1)',
          borderWidth: 3
        }]
      }
    }, {
      name: 'Mateus',
      nickName: 'Arruda',
      description: [
        "My name is just Mateus. I am a small town called Itapipoca, in Ceará, Brazil.",
        "Computer Engineer since 2018 by the Federal University of Ceará.",
        "Just doing as much as possible to circumvent the consequences of occasional bad luck.",
        "Just trying to be someone"

      ],
      sideTitle: ['What I did as an artist', 'What I did as a developer'],
      artNames: ['Capsule 341', 'History Prediction', 'Time and Money', 'Welcome to my mind', 'Haunted House', 'Spider-Man'],
      codeProjectNames: ['Magnifinance', 'Blender', 'Kaynan Nutritionist', 'Loading JR.'],
      data: {
        labels: ['Teamwork', 'Organization', 'Adaptability', 'Curiosity', 'Self-taught'],
        datasets: [{
          data: [92, 80, 95, 88, 75],
          backgroundColor: 'rgba(17, 192, 145, 0.1)',
          borderColor: 'rgba(17, 192, 145, 1)',
          borderWidth: 3
        }]
      }
    },
    {
      name: 'マテウス',
      nickName: 'アルダ',
      description: [
        "私の名前はマシューです。私はブラジルのセアラにあるイタピポカという小さな町です。",
        "2018年からセアラ連邦大学のコンピューターエンジニア。",
        "偶然の不運の結果を回避するために、できるだけ多くのことをするだけです。",
        "誰かになろうとするだけ。",
      ],
      sideTitle: ['アーティストとしてやったこと', '開発者としてやったこと'],
      artNames: ['Capsule 341', '履歴予測', '時間とお金', '私の心へようこそ', 'お化け屋敷', 'Spider-Man'],
      codeProjectNames: ['Magnifinance', 'Blender', 'カイナン 栄養士', 'Loading JR.'],
      data: {
        labels: ['チームワーク', '組織的', '融通', '好奇心', '自己流'],
        datasets: [{
          data: [92, 80, 95, 88, 75],
          backgroundColor: 'rgba(17, 192, 145, 0.1)',
          borderColor: 'rgba(17, 192, 145, 1)',
          borderWidth: 3
        }]
      }
    }]
  return (
    <Router>
      <PageHeader dataFromParent={environmentVariable} />
      <ThreeDViewer />
      <Switch>
        <Route path="/" exact>
          <div className='grid-template'>
            <MyDescription dataFromParent={environmentVariable} />
            <LeftProjects dataFromParent={environmentVariable} />
            <RightProjects dataFromParent={environmentVariable} />
          </div>
        </Route>
        <Route path="/subject/:id" component={Details}></Route>
      </Switch>
      <Footer dataFromParent={environmentVariable} />
    </Router >);
}

export default App;
