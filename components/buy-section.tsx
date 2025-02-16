import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function BuySection() {
  return (
    <section className="px-4 sm:px-6 py-20 sm:py-16 bg-black/50">
      <div className="max-w-2xl mx-auto">
        <h2 className="mb-6 sm:mb-8 text-center text-2xl sm:text-3xl font-bold text-primary animate-fadeIn">
          HOW TO BUY <br/> $ANITA
        </h2>
        <div className="space-y-4 sm:space-y-6">
          <Card className="border-primary bg-black/20 backdrop-blur animate-slideUp">
            <CardContent className="p-4 sm:p-6">
              <h3 className="mb-2 text-lg sm:text-xl font-semibold text-primary">CREATE WALLET</h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/80">
                Download MetaMask or your wallet of choice from the app store or Google Play Store for free. Desktop
                users, download the Google Chrome extension.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary bg-black/20 backdrop-blur animate-slideUp">
            <CardContent className="p-4 sm:p-6">
              <h3 className="mb-2 text-lg sm:text-xl font-semibold text-primary">GET ETH</h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/80">
                Have ETH in your wallet to switch to $ANITA. If you don't have any ETH, you can buy directly on
                metamask, transfer from another wallet, or buy on another exchange.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary bg-black/20 backdrop-blur animate-slideUp">
            <CardContent className="p-4 sm:p-6">
              <h3 className="mb-2 text-lg sm:text-xl font-semibold text-primary">GO TO UNISWAP</h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/80">
                Connect to Uniswap. Go to app.uniswap.org. Connect your wallet. Paste the $ANITA token address, select
                ANITA, and confirm. Sign the wallet signature when prompted.
              </p>
            </CardContent>
          </Card>

          <Button className="w-full animate-fadeIn">BUY $ANITA</Button>
        </div>
      </div>
    </section>
  )
}

