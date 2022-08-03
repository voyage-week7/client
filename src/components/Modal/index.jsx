import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pageheader } from '../../pages/Profile';
import { FilterList, LocationCont, ModalContainer, ModalSection, StickyBottom } from './styles';

const Modal = ({ isOpen }) => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    return (
        <>
            <ModalSection isOpen={isOpen} className='modal'>
                <div className="modalcont">
                    <Pageheader>
                        <nav>
                            <h3>필터</h3>
                            <p>초기화</p>
                        </nav>
                    </Pageheader>
                    <FilterList>
                        <li>
                            <div onClick={() => setVisible(true)}>
                                <i className='location'></i>
                                <p>지역</p>
                                <span>미선택</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i className='food'></i>
                                <p>음식 종류</p>
                                <span>미선택</span>
                            </div>
                        </li>
                    </FilterList>
                </div>
                <StickyBottom>
                    <button onClick={() => {
                        document.querySelector('.modal').style.display = 'none';
                        window.location.reload();
                    }}>닫기</button>
                    <button>적용</button>
                </StickyBottom>
            </ModalSection>
            <ModalSection className='location-cont' visible={visible}>
                <div className="modalcont">
                    <Pageheader style={{ borderBottom: "1px solid #eee" }}>
                        <nav>
                            <h3>지역</h3>
                            <p>초기화</p>
                        </nav>
                    </Pageheader>
                    <LocationCont>
                        <div className="cat1">
                            <ul>
                                <li>대구</li>
                            </ul>
                        </div>
                        <div className="cat2">
                            <ul>
                                <li>대구전체</li>
                                <li>중구/동구</li>
                                <li>수성구/남구</li>
                                <li>북구/서구</li>
                                <li>달서구/달성군</li>
                            </ul>
                        </div>
                    </LocationCont>
                </div>
                <StickyBottom>
                    <button onClick={() => setVisible(false)}>이전</button>
                    <button>적용</button>
                </StickyBottom>
            </ModalSection>
        </>
    );
};

export default Modal;
