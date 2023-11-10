import React, { createContext, useCallback, useReducer, useState } from 'react';
import './list.scss';
import { useNavigate } from 'react-router-dom';
import DetailPage from './modal';

export const StateContext = createContext({
  informIndex: [],
});

export const FunctionContext = createContext({
  createData: () => {},
  editData: () => {},
  deleteData: () => {},
});

const initialInformState = {
  informIndex: [
    {
      id: 1,
      title: '신청한 참여시간을 다른시간으로 옮겨도 될까요?',
      content: '안됩니다.',
      writer: '박*수',
      date: new Date(2023, 0, 1).toLocaleDateString(),
    },
    {
      id: 2,
      title:
        '서류가 준비안되어서 할인을 못받았는데 현장에서 서류를 제출하고 할인을 받을 수 있나요?',
      content: '안됩니다.',
      writer: '전*태',
      date: new Date(2023, 0, 1).toLocaleDateString(),
    },
    {
      id: 3,
      title: '공연시간이 어떻게 되나요?',
      content: '알아서 찾으세요.',
      writer: '강*구',
      date: new Date(2023, 0, 1).toLocaleDateString(),
    },
    {
      id: 4,
      title: '미취학 아동과 동반하여 출입이 가능한가요?',
      content: '티켓이 없으면 불가능합니다.',
      writer: '정*원',
      date: new Date(2023, 0, 1).toLocaleDateString(),
    },
    {
      id: 5,
      title: '우천 시 일정이 어떻게 되나요?',
      content: '정상영업합니다. 단, 우산은 가지고 들어가실 수 없습니다.',
      writer: '조*민',
      date: new Date(2023, 0, 1).toLocaleDateString(),
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return {
        informIndex: state.informIndex.concat({
          ...action.item,
          id: state.informIndex.length + 1,
        }),
      };
    case 'EDIT':
      return {
        informIndex: state.informIndex.map((item) =>
          item.id === action.item.id ? { ...item, ...action.item } : item,
        ),
      };
    case 'DELETE':
      return {
        informIndex: state.informIndex.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

const FAQ = () => {
  const [data, dispatch] = useReducer(reducer, initialInformState);
  const [onModal, setOnModal] = useState(false);
  const [delayModal, setDelayModal] = useState(false);
  const navigate = useNavigate();

  let handleDelayModal;
  let handleOffModal;

  const createData = useCallback((title, content, writer) => {
    const date = new Date().toISOString().slice(0, 10);
    dispatch({
      type: 'CREATE',
      item: { title, content, writer, date },
    });
  }, []);

  const editData = useCallback((id, title, content, writer) => {
    dispatch({
      type: 'EDIT',
      item: { id, title, content, writer },
    });
  }, []);

  const deleteData = useCallback((id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  }, []);

  const handleModal = (id) => {
    navigate(`/notice/faq/modal/${id}`);
    setOnModal(true);
    if (handleDelayModal) {
      clearTimeout(handleDelayModal);
    }
    handleDelayModal = setTimeout(() => {
      setDelayModal(!delayModal);
    }, 500);
  };

  const handleModal2 = () => {
    setDelayModal(false);
    if (handleOffModal) {
      clearTimeout(handleOffModal);
    }

    handleOffModal = setTimeout(() => {
      setOnModal(false);
    }, 500);
  };

  return (
    <StateContext.Provider value={{ informIndex: data.informIndex }}>
      <FunctionContext.Provider value={{ createData, editData, deleteData }}>
        <section className="informSection">
          <table className="ListComponent">
            <thead className="informData">
              <tr>
                <th>일련번호</th>
                <th>제목</th>
                <th>등록일</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {data.informIndex.map((info) => (
                <tr
                  onClick={() => handleModal(info.id)}
                  className="informList"
                  key={info.id}
                >
                  <td className="informNumbering">{info.id}</td>
                  <td className="informTitle">{info.title}</td>
                  <td className="informDate">{info.date}</td>
                  <td className="informWriter">{info.writer}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {onModal ? (
            <>
              <div
                className={delayModal ? 'modalBack op' : 'modalBack'}
                onClick={handleModal2}
              ></div>
              <div className={delayModal ? ' op modal' : 'modal'}>
                {/* <Outlet /> */}
                <DetailPage />
              </div>
            </>
          ) : null}
        </section>
      </FunctionContext.Provider>
    </StateContext.Provider>
  );
};

export default FAQ;
