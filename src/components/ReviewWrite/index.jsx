import React, { useRef } from 'react';
import { StoreReview } from './styles';

const ReviewWrite = () => {
    const title_ref = useRef();
    const text_ref = useRef();
    const img_ref = useRef();
    const rating_ref = useRef();
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(title_ref.current.value, text_ref.current.value);
        console.log(img_ref.current.files)
    }
    const addFile = (e) => {
        const imgList = e.target.file;
        e.preventDefault()

        console.log(e);
        console.log('여기!')
    }
    return (
        <StoreReview>
            <form action="">
                <div className="input">
                    <label htmlFor="">제목</label>
                    <input type="text" placeholder='제목을 입력해 주세요' ref={title_ref} />
                </div>
                <div className="img">
                    <label htmlFor="chooseImg" onChange={addFile}>파일 선택</label>
                    <input id='chooseImg' type="file" multiple accept='image/*' ref={img_ref} />
                </div>
                <div className="input">
                    <label htmlFor="">내용</label>
                    <textarea type="text" placeholder='내용을 입력해 주세요' rows='5' ref={text_ref} />
                </div>
                <div className="input" style={{ marginTop: "20px" }}>
                    <label htmlFor="">별점</label>
                    <input type="text" placeholder='1~5 사이의 별점을 입력해 주세요' ref={rating_ref} />
                </div>
                <button onClick={onSubmit}>저장</button>
            </form>
        </StoreReview>
    );
};

export default ReviewWrite;