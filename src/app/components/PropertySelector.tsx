import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const PropertySelector = ({ onValueChange }) => {
  return (
    <div className="mb-8">
      <Select onValueChange={onValueChange}>
        <SelectTrigger className="w-full bg-teal-600 text-white border-teal-700 hover:bg-teal-700 transition-colors">
          <SelectValue placeholder="Select a property" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="my-home">My Home</SelectItem>
          <SelectItem value="tristan-home">Tristan's Home</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PropertySelector;

