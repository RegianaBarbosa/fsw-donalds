import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1 className="text-red-500">products page</h1>
      <Button>Clique aqui</Button>
      <Input placeholder="Bora fechar esse projeto!"></Input>
    </div>
  );
};

export default ProductPage;
