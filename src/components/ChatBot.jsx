import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import quokka from '../assets/smilequokka.png';

const qnaList = [
  { question: 'DoDay는 무료인가요?', answer: '기본 기능은 모두 무료로 이용하실 수 있어요! 🎉' },
  { question: '루틴은 몇 개까지 등록할 수 있나요?', answer: '현재 제한 없이 등록 가능해요! 원하는 만큼 만들어보세요 😄' },
  { question: '알림은 어떻게 설정하나요?', answer: '루틴 생성 시 알림 시간을 설정할 수 있어요. 설정한 시간에 푸시 알림이 발송돼요! 🔔' },
  { question: '데이터는 어디에 저장되나요?', answer: '모든 데이터는 암호화되어 안전하게 서버에 저장돼요. 걱정 마세요! 🔒' },
  { question: '탈퇴하면 데이터는 어떻게 되나요?', answer: '회원 탈퇴 시 모든 개인정보 및 루틴 데이터는 즉시 삭제돼요.' },
  { question: '스트릭이 뭔가요?', answer: '매일 루틴을 달성한 연속 일수예요! 꾸준히 하면 숫자가 올라가요 🔥' },
  { question: '앱은 어디서 다운받나요?', answer: '곧 앱스토어와 구글 플레이에서 만나볼 수 있어요! 조금만 기다려주세요 🌱' },
  { question: '문의는 어떻게 하나요?', answer: 'mgh7020@gmail.com 으로 이메일 주시면 1-2 영업일 내로 답변드려요! 📧' },
];

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: '안녕하세요! 두데이 도우미 쿼카예요 🐾\n궁금한 점을 아래에서 선택해주세요!' },
  ]);
  const [showQuestions, setShowQuestions] = useState(true);
  const bottomRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages]);

  const handleQuestion = (item) => {
    setShowQuestions(false);
    setMessages((prev) => [...prev, { type: 'user', text: item.question }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: 'bot', text: item.answer },
        { type: 'bot', text: '다른 궁금한 점이 있으신가요?' },
      ]);
      setShowQuestions(true);
    }, 600);
  };

  const handleReset = () => {
    setMessages([{ type: 'bot', text: '안녕하세요! 두데이 도우미 쿼카예요 🐾\n궁금한 점을 아래에서 선택해주세요!' }]);
    setShowQuestions(true);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            style={{
              position: 'fixed',
              bottom: '100px',
              right: '24px',
              width: '320px',
              height: '480px',
              background: '#FBF7F0',
              borderRadius: '24px',
              border: '1.5px solid #EDE3D0',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              zIndex: 999,
              boxShadow: '0 8px 32px rgba(61,43,31,0.15)',
            }}
          >
            {/* 헤더 */}
            <div style={{
              background: '#C49A6C',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexShrink: 0,
            }}>
              <img src={quokka} alt="쿼카" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#fff' }}>두데이 쿼카</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)' }}>도우미 봇</div>
              </div>
              <button
                onClick={handleReset}
                style={{
                  marginLeft: 'auto',
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '11px',
                  padding: '4px 10px',
                  cursor: 'pointer',
                }}
              >
                처음으로
              </button>
            </div>

            {/* 메시지 영역 — 스크롤 가능 */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: 'flex',
                    justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start',
                    alignItems: 'flex-end',
                    gap: '8px',
                  }}
                >
                  {msg.type === 'bot' && (
                    <img src={quokka} alt="쿼카" style={{ width: '28px', height: '28px', objectFit: 'contain', flexShrink: 0 }} />
                  )}
                  <div style={{
                    maxWidth: '75%',
                    padding: '10px 14px',
                    borderRadius: msg.type === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    background: msg.type === 'user' ? '#C49A6C' : '#fff',
                    color: msg.type === 'user' ? '#fff' : '#3D2B1F',
                    fontSize: '13px',
                    lineHeight: 1.6,
                    border: msg.type === 'bot' ? '1px solid #EDE3D0' : 'none',
                    whiteSpace: 'pre-line',
                  }}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* 질문 버튼 — 하단 고정 */}
            <AnimatePresence>
              {showQuestions && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    padding: '10px 16px',
                    borderTop: '1px solid #EDE3D0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    maxHeight: '200px',
                    overflowY: 'auto',
                    background: '#FBF7F0',
                    flexShrink: 0,
                  }}
                >
                  {qnaList.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuestion(item)}
                      style={{
                        background: '#fff',
                        border: '1.5px solid #EDE3D0',
                        borderRadius: '12px',
                        padding: '8px 14px',
                        fontSize: '12px',
                        color: '#7A5C44',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.15s',
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#FFF3E8';
                        e.target.style.borderColor = '#C49A6C';
                        e.target.style.color = '#3D2B1F';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#fff';
                        e.target.style.borderColor = '#EDE3D0';
                        e.target.style.color = '#7A5C44';
                      }}
                    >
                      {item.question}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 쿼카 버튼 */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? {} : { y: [0, -6, 0] }}
        transition={isOpen ? {} : { repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: '#C49A6C',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          boxShadow: '0 4px 20px rgba(196,154,108,0.4)',
          padding: '8px',
        }}
      >
        <img src={quokka} alt="쿼카 챗봇" style={{ width: '44px', height: '44px', objectFit: 'contain' }} />
      </motion.button>
    </>
  );
}

export default ChatBot;