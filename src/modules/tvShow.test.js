import TvShows from './tvShow.js';

test('Count the array of data and render the number', () => {
  const show = new TvShows();
  const arr = [
    { id: 1, name: 'Movie 1' },
    { id: 2, name: 'Movie 2' },
    { id: 3, name: 'Movie 3' },
    { id: 4, name: 'Movie 4' },
    { id: 5, name: 'Movie 5' },
    { id: 6, name: 'Movie 6' },
    { id: 7, name: 'Movie 7' },
    { id: 8, name: 'Movie 8' },
  ];

  const length = show.countShows(arr);
  expect(length).toBe(8);
});

test('Count the array of comments and render the number', () => {
  const comment = new TvShows();
  const arr = [
    { comment: 1, creation_date: '2021-01-10', username: 'gordon' },
    { comment: 1, creation_date: '2021-01-09', username: 'Kevo' },
    { comment: 1, creation_date: '2021-01-10', username: 'Mike' },
    { comment: 1, creation_date: '2021-01-11', username: 'Ous' },
    { comment: 1, creation_date: '2021-01-10', username: 'lee' },
  ];

  const length = comment.countComments(arr);
  expect(length).toBe(5);
});