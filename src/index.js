import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const PrintName=()=>{
    const [name, setName]=React.useState('noname');
    let caution='';
    
    const getName=(name)=>{
        caution='';
        setName(name);

        if(setName === name){
            caution='重複しています。';
        }else{
            return ;
        }
    }

    // // setStateを使用してどうにかできないかと考えた版です。どちらも反応がありませんでした。
    // const [name, setName]=React.useState('noname');
    // const [caution, setCaution]=React.useState('');
    
    // const getName=(name)=>{
    //     setName(name);

    //     if(setName === name){
    //         setCaution('同じものです。');
    //     }else{
    //         return ;
    //     }
    // }

    return(
        <div className="container">
            <h1>名前をだします。</h1>
            <div className="btnArea">
                <button onClick={()=>getName('たつや')}>たつや</button>
                <button onClick={()=>getName('はるお')}>はるお</button>
            </div>
            <p>{name}</p>
            <p className="caution">{caution}</p>
        </div>

    )
}

// const PrintName=()=>{
//     const [name, setName]=React.useState('noname');
//     // useState()は、第一引数に配列の１1番目、第二引数に配列の2番目を持ってくる
//     // ほぼ配列みたいな存在！！

//     return (
//         <div className="container">
//             <h1>お名前だします</h1>
//             <div className="btnArea">
//                 <button onClick={()=>setName('もえちゃん')}> もえちゃん</button>
//                 <button onClick={()=>setName('くま')}>くま</button>
//                 {/* setNameを実行するのに、引数を入れれば、その引数が、useStateの第二引数に渡る！ */}
//             </div>
//             <p>{name}</p>
//         </div>
//     )
// }

// 動作が1つしかない時はこれで記入すれば行もなくないから、いい。
// けど、関数にして、その中でまた処理を行いたい場合（たぶん今後はこっちの方がおおい）はこれだと処理が追加できない。


// const PrintName=()=>{
//     const [name, setName]=React.useState('noname');

//     const getName=(name)=>{
//         setName(name);
//         // ここからは、上のと同じ。setNameを引数を持った状態で呼び出します！！
//         // わざわざ分ける必要はないから、1文で書ける。
//     }

//     return(
//         <div className="container">
//             <h1>名前だします！！</h1>
//             <div className="btnArea">
//                 <button onClick={()=>getName('もえちゃん')}>もえちゃん</button>
//                 <button onClick={()=>getName('くま')}>くま</button>
//                 {/* 今回でいうと、クリックするとgetNameを引数をもって呼び出す！ */}
//             </div>
//             <p>{name}</p>
//         </div>

//     )
// }

// __________________

ReactDOM.render(<PrintName /> , document.getElementById('root'));
// renderっていう関数として見れば、どこにコロンが必要かがわかる。