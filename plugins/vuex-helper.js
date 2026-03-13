export default ({ store }, inject) => {
    inject('getCompanyInfo', () => store.getters.findAllCompany || []);
  };
  