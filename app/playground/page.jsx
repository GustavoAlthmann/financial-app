import Input from "@/components/Input";
import Select from "@/components/Select";
import Button from "@/components/button";
import Label from "@/components/label";
import PageHeader from "@/components/page-header";
import Separator from "@/components/separator";
import Skeleton from "@/components/skeleton";
import TransactionItem from "@/components/transaction-item";
import TransactionSummaryItem from "@/components/transaction-summary-item";
import Trend from "@/components/trend";

export const metadata = {
  title: "Playground"
};

export default function Page() {
    return(
        <main className="space-y-8 mb-44">
            <h1 className="text-4xl mt-8">Playground</h1>

            <div>
                <h2 className="mb-4 text-lg font-mono">Page Header</h2>
                <Separator />
                <div><PageHeader /></div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">Trend</h2>
                <Separator />
                <div className="flex space-x-8"><Trend type="Income" amount={18000} prevAmount={11000} />
                <Trend type="Saving" amount={1200} prevAmount={800} />
                <Trend type="Investment" amount={17000} prevAmount={18000} />
                <Trend type="Expense" amount={12000} prevAmount={19000} />
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">Transaction Item</h2>
                <Separator />
                <div className="space-y-4">
                    <TransactionItem type="Income" description="Salary" amount={2000} />
                    <TransactionItem type="Expense" description="Going out to Eat" category="Food" amount={29} />
                    <TransactionItem type="Saving" description="For children" amount={500} />
                    <TransactionItem type="Investment" description="In Microsoft" amount={9000} />
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">TransactionSummary + Transaction Item</h2>
                <Separator />
                <div className="space-y-4">
                    <TransactionSummaryItem date="2024-05-01" amount={3500} />
                    <Separator />
                    <TransactionItem type="Income" description="Salary" amount={2000} />
                    <TransactionItem type="Expense" description="Going out to Eat" category="Food" amount={29} />
                    <TransactionItem type="Saving" description="For children" amount={500} />
                    <TransactionItem type="Investment" description="In Microsoft" amount={9000} />
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">Buttons</h2>
               <Separator />
                <div className="space-x-4">
                    <Button>Hello</Button>
                    <Button variant="outline">Hello</Button>
                    <Button variant="ghost">Hello</Button>

                    <Button size="xs">Hello</Button>
                    <Button size="sm">Hello</Button>
                    <Button size="lg">Hello</Button>
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">Forms</h2>
              <Separator />
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label className="mb-1">Your Name</Label>
                        <Input type='text' placeholder='Type Something in here' />
                    </div>
                     <div>
                        <Label className="mb-1">City</Label>
                        <Select>
                            <option>Warsaw</option>
                            <option>Berlim</option>
                            <option>London</option>
                        </Select>
                    </div>
                     <div className="flex items-center">
                        <Input type='checkbox' id='terms' />
                        <Label className="ml-2" htmlFor="terms" >Accept Terms</Label>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">Loading Elemets</h2>
                <Separator />
                <div className="space-y-8 mb-4">
                    <div className="flex space-x-4">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                </div>
                <div className="space-y-4">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            </div>
        </main>
    )
}