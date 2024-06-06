import React from "react";
import {useQuill} from "react-quilljs";
import { useState } from "react";
import 'quill/dist/quill.snow.css';

function TableForm(){
  const modules = {
    toolbar: [
      
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'font': [] }],
      [{ align: [] }],
      [{ list: 'ordered'}, { list: 'bullet' }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };
    
    const { quill, quillRef } = useQuill({modules});
    const [ value, setValue ] = useState();
    
    React.useEffect(() => {
      if (quill) {
        quill.on('text-change', () => {
          console.log(quillRef.current.firstChild.innerHTML); 
          setValue(quillRef.current.firstChild.innerHTML);
          
        });
      }
    }, [quill]);
   
   
    return(
        <div>
            <div style={{width: 825, height : 500 , color: "black"}}>
            <div ref={quillRef} />
            </div>
        </div>
    );
}
export default TableForm;