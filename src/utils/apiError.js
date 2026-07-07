export const getApiErrorStatus = (error) => error?.response?.status;

export const getApiErrorTitle = (error) => {
  const status = getApiErrorStatus(error);

  if (status === 429) {
    return "요청 한도 초과";
  }

  return "데이터를 불러오지 못했습니다";
};

export const getApiErrorMessage = (error) => {
  const status = getApiErrorStatus(error);

  if (status === 429) {
    return "API 요청 한도를 초과했습니다. 한도가 초기화된 후 다시 이용해주세요.";
  }

  if (status === 401 || status === 403) {
    return "API 인증 정보가 올바르지 않거나 접근 권한이 없습니다.";
  }

  if (status >= 500) {
    return "API 서버 응답이 불안정합니다. 잠시 후 다시 시도해주세요.";
  }

  if (typeof navigator !== "undefined" && !navigator.onLine) {
    return "네트워크 연결을 확인한 뒤 다시 시도해주세요.";
  }

  return "일시적인 문제가 발생했습니다. 잠시 후 다시 시도해주세요.";
};
