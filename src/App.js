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



function App() {
  if (localStorage['language'] === null || localStorage['language'] === undefined) {
    localStorage['language'] = 0
  }

  var environmentVariable = [
    {
      name: 'Mateus',
      nickName: 'Arruda',
      description: [
        "Meu nome é apenas Mateus. Sou apenas de uma pequena cidade do Brasil e estou tentando todos os dias fazer coisas bonitas.",
        "Apenas me aplicando todos os dias para aprender o desconhecido.",
        "Apenas triste, porque desejo ter todo o tempo para aprender. Feliz porque tenho todo mundo que preciso na minha vida.",
        "Apenas tentando superar todas as barreiras que surgiram no meu caminho.",
        "Apenas fazendo o máximo possível para driblar as consequências de uma má sorte ocasional.",
        "Apenas tentando ser...",
        "Apenas alguém."
      ],
      sideTitle: ['O que fiz como artista', 'O que fiz como desenvolvedor']
    }, {
      name: 'Mateus',
      nickName: 'Arruda',
      description: [
        "My name is just Mateus. I'm just from a small city of Brazil and I'm trying everyday to do beautiful things.",
        "Just applying myself everyday to learn the unknown.",
        "Just sad because I wish to have all the time to learn. Just happy because I have everyone that I need in my life.",
        "Just trying to overcome all the barriers that raised in my path.",
        "Just making everything possible to dribble the consequences of a occasional bad luck",
        "Just trying to be...",
        "Just Someone"
      ],
      sideTitle: ['What I did as an artist', 'What I did as a developer']

    },
    {
      name: 'マテウス',
      nickName: 'アルダ',
      description: [
        "私の名前はマテウスです。. 私はブラジルの小さな町から来たばかりで、毎日美しいことをしようとしています。",
        "未知のものを学ぶために毎日自分自身を適用する。",
        "ただ、悲しいことです。私はいつも学びたいと思っています。人生で必要な人がみんないるから幸せだ。",
        "私の道で生じたすべての障壁を克服しようとしています。",
        "偶然の不運の結果をドリブルするためにすべてを可能にするだけ。",
        "ただしようとしている...",
        "ただ誰か。"
      ],
      sideTitle: ['アーティストとしてやったこと', '開発者としてやったこと']
    }]
  return (
    <div>
      <PageHeader dataFromParent={environmentVariable} />
      <ThreeDViewer />
      <div className='grid-template'>
        <MyDescription dataFromParent={environmentVariable} />
        <LeftProjects dataFromParent={environmentVariable} />
        <RightProjects dataFromParent={environmentVariable} />
      </div>
      <Footer />
    </div>);
}

export default App;
