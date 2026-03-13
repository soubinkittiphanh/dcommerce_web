
<template>
    <div class="coming-soon">
        <h1>Coming Soon</h1>
        <p>We're currently working hard on something amazing. Stay tuned!</p>
        <div class="countdown">
            <div class="countdown-item">
                <span class="number">{{ days }}</span>
                <span class="text">Days</span>
            </div>
            <div class="countdown-item">
                <span class="number">{{ hours }}</span>
                <span class="text">Hours</span>
            </div>
            <div class="countdown-item">
                <span class="number">{{ minutes }}</span>
                <span class="text">Minutes</span>
            </div>
            <div class="countdown-item">
                <span class="number">{{ seconds }}</span>
                <span class="text">Seconds</span>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            countdown: null,
            countdownInterval: null,
            targetDate: new Date('2022-01-01T00:00:00.000Z')
        };
    },
    computed: {
        days() {
            return Math.floor(this.countdown / (1000 * 60 * 60 * 24));
        },
        hours() {
            return Math.floor((this.countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        },
        minutes() {
            return Math.floor((this.countdown % (1000 * 60 * 60)) / (1000 * 60));
        },
        seconds() {
            return Math.floor((this.countdown % (1000 * 60)) / 1000);
        }
    },
    mounted() {
        this.countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            this.countdown = this.targetDate - now;
            if (this.countdown < 0) {
                clearInterval(this.countdownInterval);
            }
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.countdownInterval);
    }
};
</script>
  
<style>
.coming-soon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
}

h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.countdown {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
}

.countdown-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
}

.number {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.text {
    font-size: 1.5rem;
    text-transform: uppercase;
}
</style>
  