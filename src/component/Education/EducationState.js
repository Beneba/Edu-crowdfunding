import React, {useState} from 'react'
import EducationDetail from './EducationDetail';

function EducationState() {
    const [post, setPost] = useState([
    {
        title: "Holy Innocent Anglican",
        type:"Support for books",
        photo: "",
        author: 'Beneba12',
        author_id: "12wdg46",
        date: "02/04/2024",
        description:"My brother Scott Brower was killed in a tragic accident on March 20th. He was 42 years old and has left behind his wife, Mary Elizabeth, and his 21-month old daughter Anna. Many of you have asked how you can help our family during this terrible time. If you would like to help fund Anna's education, please make a contribution here.Thank you",
        target: "20000", 
    },
    {
        title: "St.Joseph R/C JHS ",
        type:"Support for funiture",
        photo: "",
        author: 'Beneba12',
        author_id: "12fggr23",
        date: "02/04/2024",
        description:"My brother Scott Brower was killed in a tragic accident on March 20th. He was 42 years old and has left behind his wife, Mary Elizabeth, and his 21-month old daughter Anna. Many of you have asked how you can help our family during this terrible time. If you would like to help fund Anna's education, please make a contribution here.Thank you",
        target: "60000", 
    },
    {
        title: "Branwin M/A Basic School",
        type:"Support for stationaries",
        photo: "",
        author: 'Beneba12',
        author_id: "12wdg456",
        date: "02/04/2024",
        description:"My brother Scott Brower was killed in a tragic accident on March 20th. He was 42 years old and has left behind his wife, Mary Elizabeth, and his 21-month old daughter Anna. Many of you have asked how you can help our family during this terrible time. If you would like to help fund Anna's education, please make a contribution here.Thank you",
        target: "20000", 
    }
    ]);
   
  return (
    <EducationDetail  />
  )
}

export default EducationState