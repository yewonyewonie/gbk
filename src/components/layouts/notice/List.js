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
      title: '달빛기행 외국인 행사 예매안내',
      content:
        `10.27(금)~10.31(화) 영·중·일 3개 국어로 운영되며 예매 시작은 10.14(토) 오후 2시부터 입니다.
        이용에 불편함 없으시길 바랍니다.`,
      writer: '문화재청',
      date: new Date(2023, 9, 1).toLocaleDateString(),
    },
    {
      id: 2,
      title: '별빛야행 도슭수라상 메뉴변경',
      content:
        '10.20(금)부터 도슭수라상의 기존메뉴인 완자전이 생선에서 돼지고기로 변경됩니다. <br />이용에 불편함 없으시길 바랍니다.',
      writer: '문화재청',
      date: new Date(2023, 9, 14).toLocaleDateString(),
    },
    {
      id: 3,
      title: '밤의 석조전 테라스 카페 체험 장소변경 안내',
      content:
        '금일 진행 예정이던 테라스 카페 체험 행사가 우천으로 인하여 테라스가 아닌 석조전 내부에서 진행될 예정입니다.',
      writer: '문화재청',
      date: new Date(2023, 9, 20).toLocaleDateString(),
    },
    {
      id: 4,
      title: '사회적 배려 대상자 궁궐 초청 행사 접수 시작!',
      content:
        '10.20(금) 오후 2시부터 접수시작입니다. 경복궁 별빛야행 - 11.01.(수) ~ 11.14.(화) 창덕궁 달빛기행 - 11.01.(수) ~ 11.14.(화)',
      writer: '문화재청',
      date: new Date(2023, 10, 3).toLocaleDateString(),
    },
    {
      id: 5,
      title: '참여대상 현장 추첨 이벤트.',
      content: '행사에 참여하는 분들을 대상으로 이벤트를 진행중이니 많은 참여 부탁드립니다',
      writer: '문화재청',
      date: new Date(2023, 10, 5).toLocaleDateString(),
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

const List = () => {
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
    navigate(`/notice/inform/modal/${id}`);
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

export default List;
