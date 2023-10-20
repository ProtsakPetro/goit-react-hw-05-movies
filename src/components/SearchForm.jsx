import { useSearchParams } from 'react-router-dom';
import { Button, FormWrap, Input } from './Parts.styled';

const SearchForm = ({ submit }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryByParams = searchParams.get('search') || '';

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(queryByParams);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormWrap>
        <Input
          name="title"
          type="text"
          value={queryByParams}
          placeholder="I search..."
          required
          onChange={(e) => setSearchParams({ search: e.target.value })}
        />
        <Button type="submit">SEARCH</Button>
      </FormWrap>
    </form>
  );
}

export default SearchForm;