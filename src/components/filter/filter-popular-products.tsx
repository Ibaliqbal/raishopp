import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  onChange: (value: string) => void;
  value: string;
  lists: string[];
};

const FilterPopularProducts = ({ onChange, value, lists }: Props) => {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a filtering" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filter</SelectLabel>
          {lists.map((list) => (
            <SelectItem value={list} key={list} className="capitalize">
              {list}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterPopularProducts;
