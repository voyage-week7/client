import React from 'react';
import styled from 'styled-components';
import { BsCalendar } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import dayjs from 'dayjs';

const ReservationModal = ({ modalShow, setModalShow, onSuccess, selectedData }) => {
  const onClickBody = (e) => {
    e.stopPropagation();
  };
  return (
    <ModalBg onClick={() => setModalShow(false)}>
      <ModalBody onClick={onClickBody}>
        <ModalHeader>내일 방문이 맞으신가요?</ModalHeader>
        <Progress>
          <span style={{ width: '33.33%' }}></span>
        </Progress>
        <ModalContent>
          <p className='check'>방문 일정을 다시 한번 확인해주 주세요.</p>
          <div className='info'>
            <h1>{selectedData.storename}</h1>
            <p>{selectedData.category}</p>
            <div className='icons'>
              <div>
                <BsCalendar style={{ width: '38px', height: '38px', display: 'block', margin: ' 0 auto 4px' }} />
                <IconDesc>{dayjs(new Date()).add(1, 'day').format('YYYY-MM-DD')}</IconDesc>
              </div>
              <div>
                <BiTimeFive style={{ width: '38px', height: '38px', display: 'block', margin: ' 0 auto 4px' }} />
                <IconDesc>{selectedData.time}</IconDesc>
              </div>
              <div>
                <FaRegUser style={{ width: '38px', height: '38px', display: 'block', margin: ' 0 auto 4px' }} />
                <IconDesc>2 명</IconDesc>
              </div>
            </div>
          </div>
          <p className='warn'>
            당일취소 및 노쇼는 레스토랑뿐만 아니라 다른 고객님께도 피해가 될 수 있으므로 신중히 예약 부탁드립니다 :)
          </p>
          <div className='buttons'>
            <button onClick={() => setModalShow(false)}>취소</button>
            <button style={{ backgroundColor: '#ff3d00', color: 'white', borderColor: '#ff3d00' }} onClick={onSuccess}>
              확인
            </button>
          </div>
        </ModalContent>
      </ModalBody>
    </ModalBg>
  );
};

export default ReservationModal;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.51);
  z-index: 9999;
`;

const ModalBody = styled.div`
  border-radius: 20px 20px 0 0;
  max-width: 480px;
  padding-bottom: 0.7rem;
  width: 100%;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 20px;
  border-bottom: 1px solid #f1f1f1;
`;

const Progress = styled.div`
  position: relative;
  background: #f1f1f1;
  height: 3px;

  span {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #ff3d00;
  }
`;

const ModalContent = styled.div`
  .check {
    color: #666;
    padding: 20px;
    font-size: 0.9rem;
  }
  .info {
    margin: 10px;
    text-align: center;
    border: 1px solid #f4f4f4;
    border-radius: 10px;
    padding: 20px;
    & > h1 {
      font-weight: 700;
      font-size: 22px;
      margin-bottom: 2px;
    }
    & > p {
      font-size: 13px;
      color: #666;
    }
    .icons {
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
      gap: 3em;
      margin: 10px 0;
    }
  }
  .warn {
    margin: 10px 0;
    color: #666;
    padding: 20px;
  }
  .buttons {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin: 10px;
    & button {
      flex: 1;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      padding: 14px 0;
      cursor: pointer;
    }
  }
`;

const IconDesc = styled.p`
  text-align: center;
  font-weight: 500;
`;
