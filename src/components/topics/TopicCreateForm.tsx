'use client';

import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';
import * as actions from '@/actions';
import { useActionState } from 'react';
import FormButton from '@/components/common/FormButton';

export default function TopicCreateForm() {
  // formData type needs to match server action type
  const [formState, action] = useActionState(actions.createTopic, {
    errors: {},
  });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(', ')}
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topic"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(', ')}
            />
            {formState.errors._form && (
              <div className="p-2 rounded bg-red-200 border border-red-400">
                {formState.errors._form?.join(', ')}
              </div>
            )}
            <FormButton>Save</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
