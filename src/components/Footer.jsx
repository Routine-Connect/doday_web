import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const modalContents = {
  '서비스 이용약관': `제1조 (목적)
이 약관은 DoDay(이하 "회사")가 제공하는 루틴 관리 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.

제2조 (정의)
① "서비스"란 회사가 제공하는 루틴 설정, 데일리 체크, 성취도 리포트 등 일체의 서비스를 의미합니다.
② "이용자"란 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
③ "회원"이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며 서비스를 계속적으로 이용할 수 있는 자를 말합니다.

제3조 (약관의 효력 및 변경)
① 이 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.
② 회사는 합리적인 사유가 있을 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항을 통해 공지합니다.

제4조 (서비스의 제공)
① 회사는 루틴 관리, 데일리 체크, 통계 제공 등의 서비스를 제공합니다.
② 서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.
③ 회사는 시스템 점검, 장애, 기타 사유로 서비스 제공을 일시 중단할 수 있습니다.

제5조 (이용자의 의무)
① 이용자는 타인의 정보를 도용하거나 허위 정보를 등록해서는 안 됩니다.
② 이용자는 서비스를 통해 얻은 정보를 회사의 동의 없이 복제, 유통, 상업적으로 이용해서는 안 됩니다.`,

  '개인정보 처리방침': `DoDay(이하 "회사")는 개인정보 보호법에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.

제1조 (개인정보의 처리 목적)
회사는 다음의 목적을 위하여 개인정보를 처리합니다.
① 회원 가입 및 관리: 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리 등
② 서비스 제공: 루틴 관리, 데일리 체크, 통계 제공 등 서비스 제공

제2조 (개인정보의 처리 및 보유 기간)
① 회사는 법령에 따른 개인정보 보유·이용기간 또는 이용자로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
- 회원 정보: 회원 탈퇴 시까지
- 서비스 이용 기록: 3년

제3조 (처리하는 개인정보의 항목)
회사는 다음의 개인정보 항목을 처리하고 있습니다.
① 필수항목: 이메일 주소, 비밀번호, 닉네임, 성별
② 자동 수집 항목: 서비스 이용 기록, 접속 로그

제4조 (개인정보의 파기)
회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.`,

  '위치기반서비스 약관': `제1조 (목적)
이 약관은 DoDay(이하 "회사")가 제공하는 위치기반서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.

제2조 (서비스 내용)
① 회사는 이용자의 위치 정보를 활용하여 다음과 같은 서비스를 제공합니다.
- 위치 기반 루틴 알림 서비스
- 지역별 루틴 통계 서비스

제3조 (개인위치정보의 보호)
① 회사는 이용자의 개인위치정보를 해당 이용자의 동의 없이 서비스 제공 이외의 목적으로 이용하지 않습니다.
② 개인위치정보는 서비스 제공 완료 즉시 파기합니다.

제4조 (이용자의 권리)
① 이용자는 언제든지 개인위치정보 이용에 대한 동의를 철회할 수 있습니다.
② 이용자는 서비스 이용을 통해 수집된 위치정보의 열람, 정정을 요청할 수 있습니다.`,

  '자주 묻는 질문': `Q. DoDay는 무료인가요?
A. 기본 기능은 무료로 이용하실 수 있습니다.

Q. 루틴은 몇 개까지 등록할 수 있나요?
A. 현재 제한 없이 등록 가능합니다.

Q. 알림은 어떻게 설정하나요?
A. 루틴 생성 시 알림 시간을 설정할 수 있으며, 설정한 시간에 푸시 알림이 발송됩니다.

Q. 데이터는 어디에 저장되나요?
A. 모든 데이터는 암호화되어 안전하게 서버에 저장됩니다.

Q. 탈퇴하면 데이터는 어떻게 되나요?
A. 회원 탈퇴 시 모든 개인정보 및 루틴 데이터는 즉시 삭제됩니다.`,

  '문의하기': `문의 방법

📧 이메일 문의
mgh7020@gmail.com
평일 09:00 - 18:00 운영
(주말 및 공휴일 제외)

📱 앱 내 문의
앱 내 마이페이지 > 설정 > 문의하기

📝 문의 시 포함해주세요
- 문의 유형 (버그/기능 제안/기타)
- 사용 중인 기기 및 OS 버전
- 문제 발생 상황 설명
- 관련 스크린샷 (있을 경우)

평균 응답 시간: 1-2 영업일`,

  '피드백 보내기': `DoDay를 더 좋은 서비스로 만들기 위해
여러분의 소중한 의견을 기다립니다! 🌱

피드백 채널

⭐ 앱스토어 리뷰
앱스토어에서 DoDay를 검색 후 별점과 리뷰를 남겨주세요.

📧 이메일 피드백
doday.feedback@gmail.com

💡 제안하고 싶은 기능이 있으신가요?
새로운 기능, 개선사항, 불편한 점 모두 환영합니다.
여러분의 피드백이 DoDay를 성장시킵니다.`,
};

const links = {
  '서비스': ['기능 소개', '업데이트 내역', '앱 다운로드'],
  '법적 고지': ['서비스 이용약관', '개인정보 처리방침', '위치기반서비스 약관'],
};

function Footer() {
  const [modal, setModal] = useState(null);

  const handleClick = (item) => {
    if (modalContents[item]) {
      setModal(item);
    }
  };

  return (
    <>
      <footer style={{ background: '#2A1E15', padding: '48px 40px 28px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '32px',
          maxWidth: '700px',
          margin: '0 auto 36px',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{
                width: '26px', height: '26px', background: '#C49A6C',
                borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <span style={{ color: '#fff', fontSize: '16px' }}>+</span>
              </div>
              <span style={{ fontSize: '16px', fontWeight: '600', color: '#F5F0E8' }}>DoDay</span>
            </div>
            <p style={{ fontSize: '12px', color: '#7A5C44', lineHeight: 1.8 }}>
              작은 습관이 내일의 나를 만든다.<br />매일 두데이와 함께해요.
            </p>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#C49A6C', marginBottom: '14px' }}>
                {title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {items.map((item) => (
                  <span
                    key={item}
                    onClick={() => handleClick(item)}
                    style={{
                      fontSize: '12px',
                      color: modalContents[item] ? '#C49A6C' : '#9A7B5C',
                      cursor: modalContents[item] ? 'pointer' : 'default',
                      textDecoration: modalContents[item] ? 'underline' : 'none',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #3D2B1F', maxWidth: '700px', margin: '0 auto 20px' }} />

        <div style={{
          maxWidth: '700px', margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px'
        }}>
          <span style={{ fontSize: '11px', color: '#5C3D2A' }}>© 2026 DoDay. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            {['이용약관', '개인정보처리방침'].map((item) => (
              <span
                key={item}
                onClick={() => handleClick(item === '이용약관' ? '서비스 이용약관' : '개인정보 처리방침')}
                style={{
                  fontSize: '11px', color: '#7A5C44',
                  border: '1px solid #3D2B1F', borderRadius: '20px',
                  padding: '3px 12px', cursor: 'pointer',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
            style={{
              position: 'fixed', top: 0, left: 0,
              width: '100%', height: '100%',
              background: 'rgba(0,0,0,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 1000, padding: '24px',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#FBF7F0',
                borderRadius: '24px',
                padding: '36px',
                maxWidth: '560px',
                width: '100%',
                maxHeight: '75vh',
                overflowY: 'auto',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#3D2B1F' }}>{modal}</h3>
                <button
                  onClick={() => setModal(null)}
                  style={{
                    background: '#EDE3D0', border: 'none', borderRadius: '50%',
                    width: '32px', height: '32px', cursor: 'pointer',
                    fontSize: '16px', color: '#7A5C44',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  ✕
                </button>
              </div>
              <div style={{
                fontSize: '13px', color: '#5C3D2A',
                lineHeight: 2, whiteSpace: 'pre-line',
              }}>
                {modalContents[modal]}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Footer;