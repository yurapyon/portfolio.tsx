import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Portfolio.module.css'

interface Entry {
  name: string,
  link: string,
  description: string,
  long_info?: any,
  images?: string[],
}

const renderEntry = (e: Entry) => {
  return (
    <>
      <h2><a href={e.link} target="_blank" rel="noreferrer">{e.name}</a></h2>
      <p>{e.description}</p>
      {e.long_info ? e.long_info() : " "}
      {e.images ? e.images.map((file) => {
        return <img src={file} width={700} key={file}></img>
      }) : " " }
    </>
  );
}

const entries = [
  {
    name: "maru",
    link: "https://github.com/yurapyon/maru",
    description: "OpenGL game/graphics framework",
    long_info: function maruInfo() {
      return (
      <p>
        maru is a graphics framework designed to make it easy to get up
        and running with motion graphics or game projects.
        A video made with an older version of the software can be found here: {" "}
        <a href ="https://www.youtube.com/watch?v=loHvrW5EKBk" style={{color:"#222288"}} target="_blank" rel="noreferrer">
          https://www.youtube.com/watch?v=loHvrW5EKBk
        </a>
      </p>
      )
    }
  },
  {
    name: "uokichi",
    link: "https://github.com/yurapyon/uokichi-scm",
    description: "AVR assembler",
    long_info: function uoInfo() {
      return (
      <p>
        uokichi is an assember, programmer, and uploader for AVR microcontrollers.
        The assember is written in Scheme in a pure functional style, transforming Scheme expressions into machine code with no mutation or side effects.
        Future plans consist of porting the Scheme code to Forth, and extending the program to work with PIC microcontrollers.
      </p>
      )
    }
  },
  {
    name: "kasumi",
    link: "https://github.com/yurapyon/kasumi",
    description: "audio framework",
    long_info: function kasumiInfo() {
      return (
      <p>
        kasumi is a realtime audio engine for use in games and digital audio workstations.
        The core data structure is a directed acyclic graph.
        Nodes in the graph represent audio generators or audio effects, and the user can chain these together for their processing needs.
      </p>
      )
    }
  },
  {
    name: "The Worst Compilation: Forth Wave",
    link: "https://theworstlabel.bandcamp.com/album/the-worst-compilation-fourth-wave",
    description: "Covers, inlays and CD art",
    long_info: function worstInfo () {
      return <p>Tools used: Photoshop, Illustrator, Blender</p>
    },
    images: [
      "/worst/image1.jpg",
      "/worst/image2.jpg",
    ],
  },
  {
    name: "Angel93",
    link: "https://cockrockdisco.bandcamp.com/album/angel-93/",
    description: "Covers",
    long_info: function angel93Info() {
      return <p>Tools used: Photoshop, Blender</p>
    },
    images: [
      "/angel93.jpg",
    ],
  },
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8"></meta>
        <title>mel aise {">>"} portfolio</title>
        <meta name="description" content="" />
      </Head>

      <div className={styles.header}>
        <img src="/header.png"></img>
        <p>
          <img src="/ap.jpg" width={600}></img>
        </p>
        <p>
          <a href="https://www.twitter.com/drinkdnL" target="_blank" rel="noreferrer">[tw]</a>
          <a href="https://www.soundcloud.com/weoooweooo" target="_blank" rel="noreferrer">[sc]</a>
          <a href="https://www.github.com/yurapyon" target="_blank" rel="noreferrer">[gh]</a>
          {" "}
          <a href="/resume.pdf" target="_blank" rel="noreferrer">résumé</a>
        </p>
      </div>

      <h1>PROJECTS</h1>

      <div className={styles.entries}>
        { entries.map(renderEntry) }
      </div>
    </div>
  );
};

export default Home
