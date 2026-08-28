import React, { useEffect, useState } from 'react'

const useTypeWriter=(words, typingSpeed=100, deletingSpeed=50, pause=1500)=>{
    const [text, setText]=useState("");
    const [index, setIndex]=useState(0);
    const [isDeleting, setIsDeleting]=useState(false)
    

    useEffect(()=>{
        const currentWord=words[index];
        let timer;
        if(!isDeleting && currentWord===text){
            timer=setTimeout(()=> setIsDeleting(true), pause)
        }else if(isDeleting && text===""){
            setIsDeleting(false);
            setIndex((prev)=>( prev+1) % words.length);
        }else{
            timer=setTimeout(()=> {
                setText((prev)=> isDeleting ? prev.slice(0, -1): currentWord.slice(0, prev.length+1))
            }, isDeleting? deletingSpeed: typingSpeed)
        }

        return ()=> clearTimeout(timer);
    }, [text, index, isDeleting, words, typingSpeed, deletingSpeed, pause])

    return text;

}

export default useTypeWriter;
