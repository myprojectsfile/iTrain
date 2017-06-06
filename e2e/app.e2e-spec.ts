import { ITrainPage } from './app.po';

describe('i-train App', () => {
  let page: ITrainPage;

  beforeEach(() => {
    page = new ITrainPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
