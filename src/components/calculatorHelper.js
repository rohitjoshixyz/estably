const ALL_IN_FEE_PERCENTAGE = 1.20, PERFORMANCE_FEE_PERCENTAGE = 10,
      RENDITE30PECENTAGE = 4, RENDITE60PECENTAGE = 6, RENDITE100PECENTAGE = 8; 

export const percentage = (num, per) => {
  return (num/100)*per;
}

export const calculateAllInFee = (principleAmount, value) => {
  if(value === 30 || value === 60 || value === 100) {
    return percentage(principleAmount, ALL_IN_FEE_PERCENTAGE);
  }
};

export const getReturnLabel = (value) => {
  if(value === 30) {
    return RENDITE30PECENTAGE;
  }

  if(value === 60) {
    return RENDITE60PECENTAGE;
  }

  if(value === 100) {
    return RENDITE100PECENTAGE;
  }
}

export const calculateReturnFee = (principleAmount, value) => {
  if(value === 30) {
    return percentage(principleAmount, RENDITE30PECENTAGE);
  }

  if(value === 60) {
    return percentage(principleAmount, RENDITE60PECENTAGE);
  }

  if(value === 100) {
    return percentage(principleAmount, RENDITE100PECENTAGE);
  }
};

export const calculatePerformanceFee = (principleAmount, value) => {
  if(value === 30) {
    const perfomanceValue = percentage(principleAmount, RENDITE30PECENTAGE);
    return percentage(perfomanceValue, PERFORMANCE_FEE_PERCENTAGE);
  }

  if(value === 60) {
    const perfomanceValue = percentage(principleAmount, RENDITE60PECENTAGE);
    return percentage(perfomanceValue, PERFORMANCE_FEE_PERCENTAGE);
  }

  if(value === 100) {
    const perfomanceValue = percentage(principleAmount, RENDITE100PECENTAGE);
    return percentage(perfomanceValue, PERFORMANCE_FEE_PERCENTAGE);
  }
};
