"use client"
 
import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Status } from "@/common/types"

interface ISelectLanguage {
  setValue: React.Dispatch<React.SetStateAction<Status | null>>;
  value: Status | null;
}

const SelectLanguage: React.FC<ISelectLanguage> = ({setValue, value}) => {

    //const languages = ['Hindi', 'Spanish', 'French', 'German'];
    const statuses = [
        {
          value: "Hindi",
          label: "Hindi",
        },
        {
          value: "Arabic",
          label: "Arabic",
        },
        {
          value: "Korean",
          label: "Korean",
        },
        {
          value: "Japanese",
          label: "Japanese",
        },
      ]
      const [open, setOpen] = React.useState(false)
      React.useEffect(() => {
        console.log(value)
      },[value])
    return (
        <div className="flex items-center space-x-4 border-solid ">
        <p className="text-sm text-muted-foreground">English to</p>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[150px] justify-start">
              {value ? <>{value.label}</> : <> Set language</>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" side="right" align="start">
            <Command>
              <CommandInput placeholder="Change status..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {statuses.map((status) => (
                    <CommandItem
                      key={status.value}
                      value={status.value}
                      onSelect={(value) => {
                        setValue(
                          statuses.find((lang) => lang.value === value) ||
                            null
                        )
                        setOpen(false)
                      }}
                    >
                      {status.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    )
}

export default SelectLanguage;