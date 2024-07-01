import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl text-center">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name")} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" {...register("email")} />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" {...register("message")} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ContactUs;