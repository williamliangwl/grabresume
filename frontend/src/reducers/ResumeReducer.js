const initialState = {
  resumes: [],
  resumeDetail: {},
  filterQuery: '',
  message: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'RESUME_RELOAD': {
      return {
        ...state,
        resumes: action.payload
      };
    }
    case 'RESUME_DETAIL_SET': {
      return {
        ...state,
        resumeDetail: action.payload
      }
    }
    case 'RESUME_FILTER': {      
      return {
        ...state,
        filterQuery: action.payload
      }
    }
    case 'RESUME_FAILED_ADD': {
      return {
        ...state,
        message: action.payload
      }
    }
    default: {
      return state;
    }
  }
}