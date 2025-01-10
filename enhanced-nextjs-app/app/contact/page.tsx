import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Get in touch with us for any inquiries.</p>
        <Button variant="outline">Send us an email</Button>
      </CardContent>
    </Card>
  )
}

